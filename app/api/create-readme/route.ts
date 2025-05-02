import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize with your API key from environment variables
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "AIzaSyAp4n--tj-TIR2J4vFUMvcwRgJPngbF58k");

export async function POST(req: NextRequest) {
    const { gitUrl } = await req.json();

    if (!gitUrl) {
        return NextResponse.json({ error: "Missing git URL" }, { status: 400 });
    }

    try {
        // Extract owner and repo name from gitUrl
        const urlParts = gitUrl.split('/');
        const owner = urlParts[urlParts.length - 2];
        const repo = urlParts[urlParts.length - 1];
        
        // Fetch repo details from GitHub API
        const repoDetails = await fetch(`https://api.github.com/repos/${owner}/${repo}`).then(res => {
            if (!res.ok) throw new Error("Failed to fetch repo details");
            return res.json();
        });

        const prompt = `
Create a detailed and professional README.md for the following GitHub repository:

Repository Name: ${repoDetails.full_name}
Description: ${repoDetails.description || "No description provided"}

Include the following sections:
1.Ready-to-use markdown formatting  
2. Features - List 3-5 key features of the project
3. Technologies Used - The main technologies, frameworks, and tools
4. Installation - Clear step-by-step installation instructions
5. Usage - How to use the project with examples if applicable
6. Contributing - Guidelines for contributors
7. License - Mention the license (use ${repoDetails.license?.name || "MIT"} if available)
8. License Information

Formatting Requirements:
- Use proper markdown syntax
- Include code blocks for commands
- Use h2 headers (##) for sections
- Make it visually appealing with emojis where appropriate
- Ensure the entire README is wrapped in a markdown code block
`;

        // Get the generative model - using the correct model name
        // Try these model names if one doesn't work:
        // - "gemini-1.5-pro-latest"
        // - "gemini-pro"
        // - "gemini-1.0-pro"
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });
        
        // Generate content
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        const cleanedText = text.replace(/^```[a-z]*\n?/i, '').replace(/```$/, '').trim();
        return NextResponse.json({ readme: cleanedText });
    } catch (error: any) {
        console.error("Error generating README:", error);
        return NextResponse.json(
            { 
                error: "Failed to generate README",
                details: error.message,
                // Include available models in the error response for debugging
                suggestion: "Try using model names: 'gemini-1.5-pro-latest', 'gemini-pro', or 'gemini-1.0-pro'"
            },
            { status: 500 }
        );
    }
}
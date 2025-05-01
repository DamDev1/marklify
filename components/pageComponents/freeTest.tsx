"use client";
import React, { Fragment, useState } from "react";
import ReadmeGenereate from "./ReadmeGenereate";
import axios from "axios";
import { Loader2Icon } from "lucide-react";

export default function FreeTest() {
  const [readmeContent, setReadmeContent] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [gitUrl, setGitUrl] = useState<string>("");
  const handleGenerateReadme = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/create-readme", {
        gitUrl,
      });
      setReadmeContent(res.data.readme);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="w-full bg-gray-900 relative pb-20">
        <div className="max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-30 pb-10">
          <h1 className="text-white text-4xl lg:text-5xl font-bold text-center">
            Wanna try for free?
          </h1>
          <p className="text-gray-400 text-center text-xl mt-10">
            Paste your GitHub repo URL and instantly create, preview, and copy
            One time try
          </p>
          <form
            className=" mt-6 w-[500px] ml-auto mr-auto"
            onSubmit={(e) => {
              e.preventDefault();
              handleGenerateReadme();
            }}
          >
            <div className="relative">
              <label className="sr-only" htmlFor="link">
                {" "}
                Email{" "}
              </label>

              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                id="link"
                type="text"
                placeholder="john@doe.com"
                onChange={(e) => setGitUrl(e.target.value)}
              />

              <button
                type="submit"
                className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Try for free
              </button>
            </div>
          </form>
          {/* <p className='text-gray-400 text-center text-sm mt-4'>
            No credit card required. Limited to public repositories.
          </p> */}
        </div>
        {loading ? (
          <div className="flex justify-center mt-20 items-center text-white gap-2">
            <Loader2Icon className="animate-spin" />
            <span>Generating Readme...</span>
          </div>
        ) : (
          <Fragment>
            {readmeContent && <ReadmeGenereate readmeContent={readmeContent} />}
          </Fragment>
        )}
      </div>
    </div>
  );
}

import { CheckCircle } from 'lucide-react';

const FeatureSection = () => (
  <section className="bg-white pb-6">
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto px-6 p-6 bg-white">
        <div className="mb-16 text-center">
          <h4 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h4>
          <p className="mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">
            How we change the game
          </p>
        </div>
        <div className="flex flex-wrap my-12">
          <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
            <div className="flex items-center mb-6">
              <CheckCircle width={20} height={20} className="h-6 w-6 text-indigo-500" />
              <div className="ml-4 text-xl">One-click GitHub integration</div>
            </div>
            <p className="leading-loose text-gray-500">
              Consectetur pariatur irure exercitation sit amet id consectetur consectetur magna et Lorem labore qui
              velit.
            </p>
          </div>
          <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
            <div className="flex items-center mb-6">
              <CheckCircle width={20} height={20} className="h-6 w-6 text-indigo-500" />
              <div className="ml-4 text-xl">AI-assisted README generation</div>
            </div>
            <p className="leading-loose text-gray-500">
              Labore duis pariatur est exercitation laboris cupidatat amet cillum. Amet nisi ullamco.
            </p>
          </div>
          <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
            <div className="flex items-center mb-6">
              <CheckCircle width={20} height={20} className="h-6 w-6 text-indigo-500" />
              <div className="ml-4 text-xl">Markdown with styled previews</div>
            </div>
            <p className="leading-loose text-gray-500">
              Elit deserunt nisi esse duis cupidatat proident sit minim mollit officia pariatur incididunt in tempor.
            </p>
          </div>
          <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
            <div className="flex items-center mb-6">
              <CheckCircle width={20} height={20} className="h-6 w-6 text-indigo-500" />
              <div className="ml-4 text-xl">One-click copy or download</div>
            </div>
            <p className="leading-loose text-gray-500">
              Velit sit tempor pariatur quis pariatur incididunt culpa dolor voluptate officia incididunt velit dolore.
            </p>
          </div>
          <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
            <div className="flex items-center mb-6">
              <CheckCircle width={20} height={20} className="h-6 w-6 text-indigo-500" />
              <div className="ml-4 text-xl">Choose your preferred theme</div>
            </div>
            <p className="leading-loose text-gray-500">
              Laboris elit consectetur sint nisi eu mollit proident sit magna velit adipisicing consequat amet
              reprehenderit.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-8">
            <div className="flex items-center mb-6">
              <CheckCircle width={20} height={20} className="h-6 w-6 text-indigo-500" />
              <div className="ml-4 text-xl">Manage your readme's</div>
            </div>
            <p className="leading-loose text-gray-500">
              Nostrud excepteur incididunt proident sit nulla ipsum sunt nostrud est esse adipisicing irure officia
              consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;

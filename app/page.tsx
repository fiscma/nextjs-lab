import Image from 'next/image'

export async function Blog() {
  const response = await fetch("http://localhost:4000/blog",
  {"cache":"no-cache"});
  const entries = await response.json();
  console.log(entries);

  return (
    <div className="flex flex-col ">
      <div className="p-2">
        <h2 className="font-bold">
          Title
        </h2>
      </div>
      <div className="p-2">
        <p className="text-sm"> 
          Content
        </p>
      </div>
    </div>
  );
}

export function About() {
  return (
    <div className="flex flex-col">
      <div className="p-2 font-bold" font-bold>
        Whoami?
      </div>
      <div className="p-2 font-bold" font-bold>
        What am i doing here?
      </div>
      <div className="p-2 font-bold" font-bold>
        How to get in touch?
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main >
      <div className="flex flex-row font-mono  p-4 m-4 text-green-600 bg-black  space-x-2">
        <div id="blog" className="basis-2/3  border-solid border-2 rounded-md border-inherit border-green-800">
          <Blog/>
        </div>
        <div id="about" className="basis-1/2 border-solid border-2 rounded-md border-green-800">
          <About/>
        </div>
      </div>
      
    </main>
  )
}

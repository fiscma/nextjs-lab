import Image from 'next/image'

export async function Blog() {
  const response = await fetch("http://localhost:4000/blog",
  {"cache":"no-cache"});
  const entries = await response.json();
  console.log(entries);

  return (
    <div className="flex flex-col">
      <div>
        <h2>
          Title
        </h2>
      </div>
      <div>
        <p>
          Content
        </p>
      </div>
    </div>
  );
}

export function About() {
  return (
    <div className="flex flex-col">
      <div>
        Whoami?
      </div>
      <div>
        What am i doing here?
      </div>
      <div>
        How to get in touch?
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="flex flex-row">
        <div id="blog" className="basis-2/3">
          <Blog/>
        </div>
        <div id="about" className="basis-1/2">
            <About/>
        </div>
      </div>
      
    </main>
  )
}

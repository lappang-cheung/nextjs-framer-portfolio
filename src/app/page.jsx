import Image from "next/image"

const Home = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/hero.png" alt=""
               fill className="object-contain"/>
      </div>
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/*  Title */}
        <h1 className="text-4xl md:text-6xl font-bold">
          Crafting Digital Experience, Designing Tomorrow
        </h1>
        {/* Desc */}
        <p className="md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel libero enim. Fusce luctus, nunc ut
          rutrum sodales, nibh massa sagittis eros, eget convallis massa sem consequat nisi. Morbi mattis, est et
          fringilla lacinia.
        </p>
        <div className="w-full flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View My Work
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home

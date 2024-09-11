import cov from "../img/headerbg.png";

export default function HomeHead() {
  return (
    <div className=" ">
      <div style={{ backgroundImage: `url(${cov})` }}
        className="bg-cover bg-center bg-no-repeat h-[100vh] w-full -z-20">
      </div>
    </div>
  )
}

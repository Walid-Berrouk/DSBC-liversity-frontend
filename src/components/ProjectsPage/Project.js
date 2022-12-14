export default function Project({ project }) {
  const {
    image1,
    image2,
    title,
    description,
    image2title,
    stars,
    studentsNumber,
    hours
  } = project;

  return (
    <div className="bg-white rounded-xl p-4 w-80 flex flex-col items-center gap-y-4">
      <div className="flex justify-between items-start w-full">
        <img src={image1} alt="" />
        <span>{hours} heures</span>
      </div>
      <div className="flex flex-col items-start gap-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-start text-lg">{description}</p>
      </div>
      <div className="flex gap-x-4 justify-start w-full items-center">
        <img className="h-10 w-10" src={image2} alt=""/>
        <span>{image2title}</span>
      </div>
      <div className="w-full flex justify-between">
        <div className="text-lg font-semibold">
            {stars}
        </div>
        <span>{studentsNumber} Student</span>
      </div>
    </div>
  );
}

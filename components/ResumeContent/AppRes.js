import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function AppRes() {
  return (
    <div className="flex flex-col p-4 bg-white" > {/* Custom style for A4 size */}
      <h2 className="text-xl font-semibold">My Resume</h2>
      <div className="flex justify-between items-start mt-4">
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold">John Doe</h3>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="text-sm">john.doe@example.com</p>
          <p className="text-sm">(123) 456-7890</p>
        </div>
        <Avatar className="w-24 h-24">
          <AvatarImage alt="Profile picture" src="/placeholder.svg?height=96&width=96" />
        </Avatar>
      </div>
      {/* Add more content here */}
      <div className="mt-8">
        <h4 className="text-lg font-semibold">Education</h4>
        <ul className="list-disc pl-6 mt-2">
          <li>Bachelor&apos;s Degree in Computer Science</li>
          <li>Master&apos;s Degree in Artificial Intelligence</li>
        </ul>
      </div>
      <div className="mt-8">
        <h4 className="text-lg font-semibold">Work Experience</h4>
        <ul className="list-disc pl-6 mt-2">
          <li>Software Engineer at ABC Company (2018-2021)</li>
          <li>Data Scientist at XYZ Corporation (2021-Present)</li>
        </ul>
        <h4 className="text-lg font-semibold">Work Experience</h4>
        <ul className="list-disc pl-6 mt-2">
          <li>Software Engineer at ABC Company (2018-2021)</li>
          <li>Data Scientist at XYZ Corporation (2021-Present)</li>
        </ul>
        <h4 className="text-lg font-semibold">Work Experience</h4>
        <ul className="list-disc pl-6 mt-2">
          <li>Software Engineer at ABC Company (2018-2021)</li>
          <li>Data Scientist at XYZ Corporation (2021-Present)</li>
        </ul>
        <h4 className="text-lg font-semibold">Work Experience</h4>
        <ul className="list-disc pl-6 mt-2">
          <li>Software Engineer at ABC Company (2018-2021)</li>
          <li>Data Scientist at XYZ Corporation (2021-Present)</li>
        </ul>
        <h4 className="text-lg font-semibold">Work Experience</h4>
        <ul className="list-disc pl-6 mt-2">
          <li>Software Engineer at ABC Company (2018-2021)</li>
          <li>Data Scientist at XYZ Corporation (2021-Present)</li>
        </ul>
        <h4 className="text-lg font-semibold">Work Experience</h4>
        <ul className="list-disc pl-6 mt-2">
          <li>Software Engineer at ABC Company (2018-2021)</li>
          <li>Data Scientist at XYZ Corporation (2021-Present)</li>
        </ul>
        <h4 className="text-lg font-semibold">Work Experience</h4>
        <ul className="list-disc pl-6 mt-2">
          <li>Software Engineer at ABC Company (2018-2021)</li>
          <li>Data Scientist at XYZ Corporation (2021-Present)</li>
        </ul>
        <h4 className="text-lg font-semibold">Work Experience</h4>
        <ul className="list-disc pl-6 mt-2">
          <li>Software Engineer at ABC Company (2018-2021)</li>
          <li>Data Scientist at XYZ Corporation (2021-Present)</li>
        </ul>
        <h4 className="text-lg font-semibold">Work Experience</h4>
        <ul className="list-disc pl-6 mt-2">
          <li>Software Engineer at ABC Company (2018-2021)</li>
          <li>Data Scientist at XYZ Corporation (2021-Present)</li>
        </ul>
        <h4 className="text-lg font-semibold">Work Experience</h4>
        <ul className="list-disc pl-6 mt-2">
          <li>Software Engineer at ABC Company (2018-2021)</li>
          <li>Data Scientist at XYZ Corporation (2021-Present)</li>
        </ul>
        <h4 className="text-lg font-semibold">Work Experience</h4>
        <ul className="list-disc pl-6 mt-2">
          <li>Software Engineer at ABC Company (2018-2021)</li>
          <li>Data Scientist at XYZ Corporation (2021-Present)</li>
        </ul>
      </div>
    </div>
  );
}

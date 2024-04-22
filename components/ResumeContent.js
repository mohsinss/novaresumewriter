import AppRes from "./ResumeContent/AppRes";

export default function ResumeContent({ selectedTemplate }) {
  return (
    <div className="flex flex-col p-4 bg-white" style={{ width: '794px', height: '100%', margin: '20px' }}>
      <AppRes selectedTemplate={selectedTemplate} />
    </div>
  );
}
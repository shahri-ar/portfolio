"use client"
import Button from "../common/button.component";
import { downloadFile } from './../common/downloadCv';


export function Resume() {
  const handleDownload = () => {
    downloadFile();
  };
  return (
    <div className="bg-[#f2f2f2]">
    <section id="resume" className="resume ">
        <div className="container">
    <h1>I'm open for Work</h1>
    <p>
      Check my portfolio and CV link in button click button for downloading
    </p>
    <Button
          event={handleDownload}
          className={"btn btn-secondary"}
          text={"DOWNLOAD CV"}
        />
    </div>
  </section>
  </div>
  )
}

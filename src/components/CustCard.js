import React from "react";

function CardContent(props) {
  return (
    <div className="shadow-lg shadow-indigo-500/50 flex flex-col flex-wrap ">
      <p className="bg-indigo-500 shadow-lg shadow-indigo-500/50 text-black">Tech Stack:</p>
      <p className="">{props.tech}</p>
      <p className="bg-indigo-500 shadow-lg shadow-indigo-500/50 text-black">Tools: </p>
      <ul className="list-none">
      {props.tools && props.tools.map(tool => {return (
         <li key={tool} className="italic font-medium mx-auto px-auto">{tool}</li>
      );})
      }
      </ul>
      <b>{
      props.tasks.length>0 ?
      <p className="bg-indigo-500 shadow-lg shadow-indigo-500/50 text-black">Tasks: </p>
      :
      <p></p>
        }
      </b>
      <ul className="list-disc">
      {props.tasks && props.tasks.map(task => {return (
        <div>
         <li key={task} className="italic font-medium mx-auto px-auto">{task}</li>
         <br></br>
         </div>
      );})
      }
      </ul>
    </div>
  );
}

export default class CustCard extends React.Component {
  
  render() {
    return (
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="">
          <CardContent
            tech={this.props.tech}
            tasks={this.props.tasks}
            tools={this.props.tools}
          />
        </div>
      </div>
    );
  }
}

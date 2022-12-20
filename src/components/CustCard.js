import React from "react";

function CardContent(props) {

  return (
    <div className="shadow-lg shadow-indigo-500/50">
      <p className="bg-indigo-500 shadow-lg shadow-indigo-500/50">Tech Stack:</p>
      <p className="">{props.tech}</p>
      <p className="bg-indigo-500 shadow-lg shadow-indigo-500/50">Tools: </p>
      <ul className="list-none">
      {props.tools && props.tools.map(tool => {return (
         <li key={tool} className="italic font-medium mx-auto px-auto">{tool}</li>
      );})
      }
      </ul>
      <b>{
      props.tasks.length>0 ?
      <p className="bg-indigo-500 shadow-lg shadow-indigo-500/50">Tasks: </p>
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
      <div style={{ width: this.props.width + "px" }}>
        <div className="styleCard">
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

// 2. Defaults /////////////////////////////////////////////
CustCard.defaultProps = {
  width: 900,
  title: "Template - Card Title",
  location: "Location label",
  description: "Template description textbox"
};

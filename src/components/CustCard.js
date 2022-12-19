import React from "react";

/**
 * NOTES:
 * - On styling:
 * For this test I moved the styles to styles.css.
 * - On conditional rendering:
 * The conditional statement that checks whether or not to display an image
 * exists within the 'CardImage' function. Used in the component as:
 * <CardImage />
 * - On default props:
 * I have no idea whether this approach of handling defaults is the right/best one.
 * Next step would be to try variations on setting defaults.
 */

/*
1. Card Class
2. Defaults 
*/

// 1. Card Class /////////////////////////////////////////////
// function CardImage(props) {
//   const isImageURL = props.image;
//   // If an image was passed:
//   if (isImageURL) {
//     return (
//       <div className="styleImage">
//         <img
//           style={{ width: props.width + "px", marginTop: "-8%" }}
//           src={props.image}
//           alt="Seattle"
//         />
//       </div>
//     );
//   }
//   return null;
// }

function CardContent(props) {

  return (
    <div className="styleCardContent">
      <p className="styleCardTitle">Tech Stack: {props.tech}</p>
      <p className="styleCardTitle">Tools: </p>
      <ul className="list-disc">
      {props.tools && props.tools.map(tool => {return (
         <li key={tool} className="styleCardTitle">{tool}</li>
      );})
      }
      </ul>
      <b>{
      props.tasks.length>0 ?
      <p className="styleCardTitle">Tasks: </p>
      :
      <p></p>
        }
      </b>
      <ul className="list-disc">
      {props.tasks && props.tasks.map(task => {return (
         <li key={task} className="styleCardTitle">{task}</li>
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
          {/* <CardImage image={this.props.image} width={this.props.width} /> */}
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

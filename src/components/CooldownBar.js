import React from 'react';
import useStore from '../store';

class CooldownBar extends React.Component {
  allowDrop = (ev) => {
    ev.preventDefault();
  }

  drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop = (ev) => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  render() {
    return (
      <div id="cooldownBar" onDrop={this.drop} onDragOver={this.allowDrop} style={{height: "100px", width: "100%", backgroundColor: "#f0f0f0"}}>
        {this.props.icons.map((icon, index) => (
          <img
            key={index}
            id={`drag${index}`}
            src={`/${icon}`}
            draggable="true"
            onDragStart={this.drag}
            width="100"
            height="100"
            alt={icon}
          />
        ))}
      </div>
    );
  }
}

const CooldownBarWrapper = () => {
  const cooldownBarIcons = useStore(state => state.cooldownBarIcons);
  return <CooldownBar icons={cooldownBarIcons} />
};

export default CooldownBarWrapper;

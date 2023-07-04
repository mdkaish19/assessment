import React, { useState } from "react";

const File = ({ name, size }) => {
  const handleClick = () => {
    alert(`File Name: ${name}\nFile Size: ${size}`);
  };

  return (
    <div className="file" onClick={handleClick}>
      {name}
    </div>
  );
};

const Folder = ({ name, contents }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="folder">
      <div className="folder-header" onClick={handleClick}>
        {isOpen ? "▼" : "►"} {name}
      </div>
      {isOpen &&
        contents.map((item) => {
          if (item.type === "file") {
            return (
              <File
                key={item.name}
                name={item.name}
                size={item.size}
              />
            );
          } else if (item.type === "folder") {
            return (
              <Folder
                key={item.name}
                name={item.name}
                contents={item.contents}
              />
            );
          }
          return null;
        })}
    </div>
  );
};

const FileExplorer = () => {
  const fileStructure = [
    {
      type: "file",
      name: "file1.txt",
      size: "10 KB"
    },
    {
      type: "folder",
      name: "folder1",
      contents: [
        {
          type: "file",
          name: "file2.txt",
          size: "20 KB"
        },
        {
          type: "file",
          name: "file3.txt",
          size: "15 KB"
        },
        {
          type: "folder",
          name: "folder2",
          contents: [
            {
              type: "file",
              name: "file4.txt",
              size: "5 KB"
            }
          ]
        }
      ]
    }
  ];

  return (
    <div className="file-explorer">
      {fileStructure.map((item) => {
        if (item.type === "file") {
          return (
            <File
              key={item.name}
              name={item.name}
              size={item.size}
            />
          );
        } else if (item.type === "folder") {
          return (
            <Folder
              key={item.name}
              name={item.name}
              contents={item.contents}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default FileExplorer;

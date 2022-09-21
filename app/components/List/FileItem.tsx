import Image from "next/image";
import React from "react";
import { Dropdown, Form, ListGroup, Row, Stack,Col } from "react-bootstrap";
import fileIco from "@/assets/icon/file.png";
import folderIco from "@/assets/icon/folder.png";
import { IFile } from "@/api/models/IFile";
import { useRouter } from "next/router";
import FolderService from "@/api/services/FolderService";

type Props = {
  item:IFile
};

const FileItem = ({ item }: Props) => {
  const router = useRouter();
  const openFolder = () =>{
    if(item[".tag"] === "folder"){
      router.push("/dropbox/__"+item.path_display?.slice(1,item.path_display.length).replace(/(\/)/g, "_"))
    }
  }
  
  const deleteFile = () =>{
    FolderService.delete(item.path_display?item.path_display:"/app/")
    router.back()
  }

  return (
    <ListGroup.Item action variant="light">
      <Stack direction="horizontal" gap={3} className="justify-content-between">
        <Col md={8}>
          <Form.Check
            type={"checkbox"}
            className={"top"}
            label={
              <Stack direction="horizontal" gap={2} onClick={()=>openFolder()}>
                {" "}
                <Image src={item[".tag"]==="folder"?folderIco:fileIco} width={20} height={20} draggable={false}></Image>
                <p>{item.name}</p>
              </Stack>
            }
          />
        </Col>
        <Col md={2}><p>{item.server_modified?item.server_modified.slice(0, 10):""}</p></Col>
        <Col md={1}><p>{item.size?Math.round(item.size/8/1024)/100+" mb":""}</p></Col>
        <Col md={1}>
          <Dropdown>
            <Dropdown.Toggle variant="light"></Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
              <Dropdown.Item onClick={()=>deleteFile()}>delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Stack>
    </ListGroup.Item>
  );
};

export default FileItem;

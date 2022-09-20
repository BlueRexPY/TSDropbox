import { Dropbox } from 'dropbox';


const accessToken = "";

const dbx = new Dropbox({  
  accessToken  
});

export default class FolderService {
    static async fetchData(path: string){
        dbx.filesListFolder({  
            path: path  
        }).then(response => {console.log(response)})
    }

}
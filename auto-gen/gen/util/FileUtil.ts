// @ts-ignore
import fs from 'fs';
import {WriteFileOptions} from 'node:fs'

class FileUtil {
  /**
   * 创建文件夹
   */
  static mkdirsSync(filepath: string): void {
    /**
     * @type {Array}
     */
    const arr = filepath.replaceAll('/', '\\').split('\\');
    let dirPath: string | undefined;
    for (const folderName of arr) {
      dirPath = (dirPath ? `${dirPath}\\` : '') + folderName;
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
      }
    }
  }

  /**
   * 创建文件夹
   */
  static mkdirSync(filepath: string): void {
    if (!fs.existsSync(filepath)) {
      fs.mkdirSync(filepath);
    }
  }

  static deleteSync(filePath: string): void {
    fs.unlinkSync(filePath);
  }

  /**
   * 创建文件
   */
  static createFileSync(fileName: string, folderPath: string, fileData: string | NodeJS.ArrayBufferView, encoding?: WriteFileOptions): void {
    if (!fs.existsSync(folderPath)) {
      FileUtil.mkdirSync(folderPath);
    }
    fs.writeFileSync(folderPath + '\\' + fileName, fileData, encoding);
  }

  static deleteTestFolderSync(parentFolderPath: string): void {
    const children = fs.readdirSync(parentFolderPath);
    for (const child of children) {
      if (child !== 'test') {
        continue;
      }
      this.deleteFolderRecursiveSync(`${parentFolderPath}\\${child}`);
    }
  }

  static deleteFolderRecursiveSync(path: string): void {
    if (fs.existsSync(path)) {
      fs.readdirSync(path).forEach((file) => {
        const curPath = path + "/" + file;
        if (fs.lstatSync(curPath).isDirectory()) { // recurse
          this.deleteFolderRecursiveSync(curPath);
        } else { // delete file
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(path);
    }
  }
}

export default FileUtil;
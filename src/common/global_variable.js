//定义全局变量（目前主要是设置影像模块的一些接口）

//查询原子影像树接口
const listAtomMedia = '/media/opera/see/listMediaFileTree'; 
//查询组合影像树接口
const listGroupMedia = '/media/opera/see/listGroupFileTree';
//新增影像树文件接口
const addMedia = '/media/opera/do/uploadMediaFile';
//删除影像树文件接口
const deleteMedia = '/media/opera/do/deleteFileByFileId';
//下载影像树文件接口
const downMedia = '/media/opera/do/downloadFilesZipByCatgId';
//审核影像树文件接口
const checkMedia = '/media/opera/check/addSaveMediaCheck';
//重命名影像树文件名接口
const renameMedia = '/media/opera/do/changeFileName';
//旋转保存影像树文件名接口
const rotateSaveMedia = '/media/opera/do/rotateFileByFileId';
//查询影像树文件接口
const shwoMedia = '/media/do/showFileByCatgIdBusiKey';

export default {
  	listAtomMedia,
  	listGroupMedia,
  	addMedia,
  	deleteMedia,
  	downMedia,
  	checkMedia,
  	renameMedia,
  	rotateSaveMedia,
  	shwoMedia
}

// import axios from "axios";
// import { useState } from "react";
// function UploadFiles() {

//   const [image, setImage] = useState('');  
//   const [endImg] = useState('./icone_usuario.png');
//   const [status, setStatus] = useState({
//     type: '',
//     mensagem: ''
//   });

//   const uploadImage = async e => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('image', image);

//     const headers = {
//       'headers': {
//         'Content-Type': 'application/json'
//       }
//     }

//     await axios.post("/upload-image", formData, headers)
//     .then((response) => {
//       setStatus({
//         type: 'success',
//         mensagem: response.data.mensagem
//       });
//     }).catch((err) => {
//       if(err.response){
//         setStatus({
//           type: 'error',
//           mensagem: err.response.data.mensagem
//         });
//       }else{
//         setStatus({
//           type: 'error',
//           mensagem: "Erro: Tente mais tarde!"
//         });
//       }
//     });

//   }

//   return (
//     <div>
//       <h1>Upload</h1>

//       {status.type === 'success'? <p style={{color: "green"}}>{status.mensagem}</p> : ""}
//       {status.type === 'error'? <p style={{color: "#ff0000"}}>{status.mensagem}</p> : ""}

//       <form onSubmit={uploadImage}>
//         <input type="file" name="image" onChange={e => setImage(e.target.files[0])} /><br /><br />

//         {image ? <img src={URL.createObjectURL(image)} width="150" height="150" /> : <img src={endImg} alt="Imagem" width="150" height="150" />}<br /><br />

//         <button type="submit">Salvar</button>

//       </form>
//     </div>
//   );
// }

// export default UploadFiles;

// import { ref, getDownloadURL } from "firebase/storage";
// import { storage } from "@/config/firebase";

// export const getImageUrl = async (path: string) => {
//   try {
//     const imageRef = ref(storage, path);
//     const url = await getDownloadURL(imageRef);
//     return url;
//   } catch (error) {
//     console.error("Erro ao buscar a URL da imagem:", error);
//     return null;
//   }
// };

// const ImageComponent = () => {
//   const [imageUrl, setImageUrl] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchImageUrl = async () => {
//       const url = await getImageUrl(
//         "https://firebasestorage.googleapis.com/v0/b/gabrcastrowebsite.appspot.com/o/projects%2Fcalendar.png?alt=media&token=299a9e7a-759e-42b2-81b1-f95a1d295bdd"
//       );
//       if (url != null) setImageUrl(url);
//     };

//     fetchImageUrl();
//   }, []);

//   if (!imageUrl) {
//     return <p>Carregando imagem...</p>;
//   }

//   return <img src={imageUrl} alt="Imagem do Firebase" />;
// };

import Template9Front from "../components/Template9/Template9Front";
// dom-to-image -> image 변경

const onDownloadBtn = () => {
  const card = <Template9Front />;
  domtoimage.toBlob(card).then((blob) => {
    saveAs(blob, "nameCard.png");
  });
};

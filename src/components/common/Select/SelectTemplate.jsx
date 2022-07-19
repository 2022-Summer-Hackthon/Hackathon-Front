const SelectTemplate = ({ templateList, changeTemplateNumber }) => {
  return (
    <div>
      {templateList.map((info, i) => (
        <div
          onClick={() => changeTemplateNumber(i + 1)}
          style={{ marginBottom: "15px", border: "1px solid #ccc" }}
        >
          <img src={info.front} width="490px" height="280px" />
        </div>
      ))}
    </div>
  );
};

export default SelectTemplate;

const SelectTemplate = ({ templateList, changeTemplateNumber }) => {
  return (
    <div>
      {templateList.map((info, i) => (
        <div onClick={() => changeTemplateNumber(i + 1)}>
          <img src={info.front} width="490px" height="280px" />
        </div>
      ))}
    </div>
  );
};

export default SelectTemplate;

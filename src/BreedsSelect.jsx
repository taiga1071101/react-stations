// @ts-check

export const BreedsSelect = (props) => {

  // optionタグ生成
  let breeds = props.breeds;
  if (breeds == []) {
    return;
  }
  const SelectItems = breeds.map((item) => {
    return (
      <option value={item} key={item}>{item}</option>
    );
  });

  return <select value={props.selectedBreed} onChange={props.handleChange}>{ SelectItems }</select>
}

export default BreedsSelect

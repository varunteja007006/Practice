type Props = {
  lastname: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
console.log("child");

function Child({ lastname, handleChange }: Props) {
  return (
    <input
      type="text"
      name="lastName"
      id="lastName"
      value={lastname}
      onChange={handleChange}
      placeholder="Last Name"
    />
  );
}

export default Child;

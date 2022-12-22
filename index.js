const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={className}> {buttonText} </button>;
};

const element = (
  //  Write your code here.
  <div className="container">
    <div className="content-container">
      <h1 className="heading"> Social Buttons </h1>
      <div className="buttons-container">
        <Button className="button l-button" buttonText="LIKE" />
        <Button className="button c-button" buttonText="COMMENT" />
        <Button className="button s-button" buttonText="SHARE" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

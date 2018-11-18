const ErrorMessage = ({ error }) => {
  if (!error || !error.message) return null;
  console.log(error);
  return <div> {error.message} </div>;
};

export default ErrorMessage;

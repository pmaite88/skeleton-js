const ErrorMessage = ({ error }) => {
  if (!error || !error.message) return null;

  return <div> {error.message} </div>;
};

export default ErrorMessage;

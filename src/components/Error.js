export default function Error({ errorMessage }) {
  return (
    <div className="error">
      <p className="subtitle">{errorMessage}</p>
    </div>
  );
}

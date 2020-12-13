import { FaEnvelope } from 'react-icons/fa';

export default function Email() {
  return (
    <a href="mailto:tuthanhdelatoithuong@gmail.com" className="flex items-center m-2">
      <FaEnvelope />
      <p className="ml-2">
        Email: tuthanhdelatoithuong@gmail.com
      </p>
    </a>
  );
}

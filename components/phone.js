import { FaPhoneAlt } from 'react-icons/fa';

export default function Phone() {
  return (
    <a href="tel:+87367328959" className="flex items-center m-2">
      <FaPhoneAlt />
      <p className="ml-2">Phone: 0367328959</p>
    </a>
  );
}

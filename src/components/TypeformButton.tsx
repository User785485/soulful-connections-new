import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

interface TypeformButtonProps {
  className?: string;
  children: React.ReactNode;
}

const TypeformButton: React.FC<TypeformButtonProps> = ({ className, children }) => {
  const navigate = useNavigate();
  
  const handleClick = useCallback(() => {
    navigate('/diagnostic');
  }, [navigate]);

  return (
    <button
      className={className}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default TypeformButton;

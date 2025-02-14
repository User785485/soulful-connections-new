import { createPopup } from '@typeform/embed';
import { useCallback } from 'react';

export const useTypeform = () => {
  const openTypeform = useCallback(() => {
    const popup = createPopup('01JKRM7WQYBPKGV1BPC0JC1CT6', {
      hideHeaders: true,
      hideFooter: true,
      opacity: 95,
      onSubmit: () => {
        popup.close();
      },
    });
    
    popup.open();
  }, []);

  return { openTypeform };
};

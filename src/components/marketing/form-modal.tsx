"use client";

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  formType: "audit" | "commencer";
}

export function FormModal({ isOpen, onClose, title, formType }: FormModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header de la modale */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-projectHolder">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-3xl">&times;</button>
        </div>
        
        {/* Contenu : On intègre ici l'iframe ou le code React du formulaire */}
        <div className="flex-1 overflow-y-auto p-2">
           <iframe 
             src={formType === "audit" ? "/audit-form.html" : "/commencer-form.html"} 
             className="w-full h-[700px] border-none"
           />
        </div>
      </div>
    </div>
  );
}
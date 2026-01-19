import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const AccordionContext = React.createContext({});
const useAccordion = () => React.useContext(AccordionContext);


export function Accordion({ children, multiple, defaultIndex }) {
	const [activeIndex, setActiveIndex] = React.useState(
		multiple ? [defaultIndex] : defaultIndex
	);

	function onChangeIndex(index) {
		setActiveIndex((currentActiveIndex) => {
			if (!multiple) {
				return index === activeIndex ? -1 : index;
			}

			if (currentActiveIndex.includes(index)) {
				return currentActiveIndex.filter((i) => i !== index);
			}

			return currentActiveIndex.concat(index);
		});
	}

	return React.Children.map(children, (child, index) => {
		const isActive =
			multiple && Array.isArray(activeIndex)
				? activeIndex.includes(index)
				: activeIndex === index;

		return (
			<AccordionContext.Provider value={{ isActive, index, onChangeIndex }}>
				{child}
			</AccordionContext.Provider>
		);
	});
}

export function AccordionItem({ children }) {
  return <div className="w-full mb-2 bg-primary">{children}</div>;
}

export function AccordionHeader({ children }) {
  const { isActive, index, onChangeIndex } = useAccordion();
  
  return (
    <motion.div
      className={`py-2 px-4 sm:px-6 cursor-pointer transition-colors duration-150 ease-in-out uppercase font-medium bg-slate-800 text-white-100 flex items-center justify-between gap-2`}
      onClick={() => onChangeIndex(index)}
    >
      <span>{children}</span><span className="">{isActive ? '-' : '+'}</span>
    </motion.div>
  );
}

export function AccordionPanel({ children }) {
  const { isActive } = useAccordion();

  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}
        >
          <motion.div className="p-5 bg-black-100">
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
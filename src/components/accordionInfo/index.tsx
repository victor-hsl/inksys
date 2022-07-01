import { ReactNode, useState } from "react";
import { Info } from "../../types/info";
import styled from 'styled-components'

type AccordionProps = {
    items: Info[];
}

type ContentProps = {
    onClick(): void;
    itemName: string;
    itemContent: string[];
    isActive: boolean;
}

const Accordion = styled.div`
    overflow: hidden;
    width: 100%;
    background: transparent;
    color: #f9f9f9;
`
const AccordionInner = styled.div`
    position: absolute;
    padding: 1rem!important;
    color: #212529;
`
const AccordionHeader = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 4rem;
    padding: 0 1rem;
    font-size: 1.7rem;
    text-align: left;
    background: transparent;
    border: 0;
    border-bottom: 1px solid hsl(210deg 11% 15% / 14%);
    color: #212529;
    cursor: pointer;
`

const AccordionHeaderIcon = styled.span<{isActive: boolean}>`
    transform: rotate(${props => props.isActive ? -180 : 0}deg);
    transition: all 0.2s;
    color: #212529;
`

const StyledAccordionContent = styled.div<{itemName: string; isActive: boolean}>`
    position: relative;
    overflow: hidden;
    height: ${props => {
        const inner = document.getElementById(props.itemName);
        return `${props.isActive ? inner?.clientHeight : 0}px}`;
    }};
    transition: height 0.35s;
    text-align: justify;
    font-size: 18px;
`

const AccordionContent = ({onClick, itemName, itemContent, isActive}: ContentProps) => (
    <>
        <AccordionHeader onClick={onClick}>
            {itemName}
            <AccordionHeaderIcon isActive={isActive} className='bi bi-chevron-down'>
            </AccordionHeaderIcon>
        </AccordionHeader>
        <StyledAccordionContent itemName={itemName} isActive={isActive}>
            <AccordionInner id={itemName}>
                {itemContent.map((p, key) => (
                    <p className={key > 0 ? 'mt-3' : ''} >{p}</p>
                ))}
            </AccordionInner>
        </StyledAccordionContent>
    </>
)

const AccordionInfo = ({ items } : AccordionProps) => {
    const [activeItem, setActiveItem] = useState('');

    const handleHeaderClicked = (name: string) => {
        setActiveItem(name === activeItem ? '' : name);
    }

    return(
        <Accordion>
            {items.map((item) => {
                const isActive = activeItem === item.title;
                return (
                    <AccordionContent 
                        onClick={() => handleHeaderClicked(item.title)} 
                        itemName={item.title} 
                        itemContent={item.description} 
                        isActive={isActive}
                    />    
                )
            })}
        </Accordion>
    )
}

export default AccordionInfo;
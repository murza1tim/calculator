import "./styles.css"

interface Props {
    onClick: () => void;
    theme: 'primary' | 'secondary';
    children: any;
    key?: object;
}

export const StyledButton = (props: Props) => {
    const { onClick, theme, children } = props;

    return <button onClick={onClick} className={`styled-button ${theme}`}>{children}</button>
}
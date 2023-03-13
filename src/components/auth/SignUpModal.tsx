import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";
import styled from "styled-components";

interface FadeProps {
    children: React.ReactElement;
    in?: boolean;
    onClick?: any;
    onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
    onExited?: (node: HTMLElement, isAppearing: boolean) => void;
    ownerState?: any;
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(
    props,
    ref,
) {
    const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
    } = props;
    const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
        if (open && onEnter) {
        onEnter(null as any, true);
        }
    },
    onRest: () => {
        if (!open && onExited) {
        onExited(null as any, true);
        }
    },
    });

    return (
    <animated.div ref={ref} style={style} {...other}>
        {React.cloneElement(children, { onClick })}
    </animated.div>
    );
});

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const StyledLabel = styled.label`
    margin-right: 4px;
    letter-spacing: 1px;
    align-items: center;
    font-size: 1rem;
`;

const StyledInput = styled.input`
    width: 100%;
    border-radius: 6px;
    border-style: solid;
    border-width: 1px;
    padding: 10px 0px;
    text-indent: 6px;
    margin-top: 5px;
    margin-bottom: 20px;
    letter-spacing: 1px;
`;

const StyledButton = styled.button`
    width: 100%;
    border: none;
    border-radius: 6px;
    border-style: solid;
    border-width: 1px;
    padding: 12px 0px;
    text-indent: 6px;
    margin-top: 10px;
    margin-bottom: 20px;
    letter-spacing: 2px;
    background-color: #81c6e8;
    color: white;
`;

const StyledH2 = styled.h2`
    text-align: center;
`;

export default function SignUpModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
    <>
        <form>
        <Button onClick={handleOpen}>회원가입</Button>
        <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
            backdrop: {
                TransitionComponent: Fade,
            },
            }}
        >
            <Fade in={open}>
            <Box sx={style}>
                <Typography>
                <StyledH2 id="h2">회원가입</StyledH2>
                </Typography>
                <Typography id="spring-modal-description">
                <StyledLabel>이름</StyledLabel>
                <StyledInput
                    id="name"
                    type="name"
                    name="name"
                    placeholder="이름을 입력해주세요."
                />
                </Typography>
                <Typography id="spring-modal-description">
                <StyledLabel>이메일</StyledLabel>
                <StyledInput
                    id="email"
                    type="email"
                    name="email"
                    placeholder="이메일을 입력해주세요."
                />
                </Typography>
                <Typography id="spring-modal-description">
                <StyledLabel>비밀번호</StyledLabel>
                <StyledInput
                    id="password"
                    type="password"
                    name="password"
                    placeholder="비밀번호를 입력해주세요."
                />
                </Typography>
                <Typography id="spring-modal-description">
                <StyledLabel>비밀번호 확인</StyledLabel>
                <StyledInput
                    id="confirmPassword"
                    type="password"
                    name="password"
                    placeholder="비밀번호를 한번 더 입력해주세요."
                />
                </Typography>
                <Typography>
                <StyledButton>회원가입</StyledButton>
                </Typography>
            </Box>
            </Fade>
        </Modal>
        </form>
    </>
    );
}

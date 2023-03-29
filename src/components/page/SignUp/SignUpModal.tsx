import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";
import "./SignUpModal.css";

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
                <h2 id="h2">회원가입</h2>
              </Typography>
              <Typography id="spring-modal-description">
                <label>이름</label>
                <input
                  id="name"
                  type="name"
                  name="name"
                  placeholder="이름을 입력해주세요."
                />
              </Typography>
              <Typography id="spring-modal-description">
                <label>이메일</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="이메일을 입력해주세요."
                />
              </Typography>
              <Typography id="spring-modal-description">
                <label>비밀번호</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="비밀번호를 입력해주세요."
                />
              </Typography>
              <Typography id="spring-modal-description">
                <label>비밀번호 확인</label>
                <input
                  id="confirmPassword"
                  type="password"
                  name="password"
                  placeholder="비밀번호를 한번 더 입력해주세요."
                />
              </Typography>
              <Typography>
                <button id="sign-button">회원가입</button>
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </form>
    </>
  );
}

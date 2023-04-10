import Header from "../components/Header";
import { Typography, Box, Button } from "@mui/material";

export default function Top() {
  return (
    <>
      <Header title="情報処理ⅡAオンラインジャッジシステム" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "40vw",
          margin: "50px auto 0px",
        }}
      >
        <Typography variant="h1" paragraph sx={{ fontSize: "2rem" }}>
          オンラインジャッジシステムとは？
        </Typography>
        <Typography variant="body1" paragraph>
          オンラインジャッジシステムは、プログラム問題の正誤判定・採点を自動で行うシステムです。
        </Typography>
        <Typography variant="body1" paragraph>
          村川研究室では2021年度より独自にオンラインジャッジシステムを開発・運用し、
          <br />
          情報処理ⅡAタイピングとはまた異なる学習支援として、活用してもらっています。
        </Typography>
        <Typography variant="body1" paragraph>
          提出にペナルティや制限時間はありません。
          <br />
          Accepted（正解という意味）と表示されるまで、 何度でも修正を行い、提出してください。
        </Typography>
        {/* tailwindの影響で透明になる */}
        <Button
          variant="contained"
          sx={{
            width: "200px",
            bgcolor: "#3f51b5",
          }}
        >
          問題選択画面へ
        </Button>
      </Box>
    </>
  );
}

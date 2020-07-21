import { createMuiTheme } from "@material-ui/core";
import { esES } from "@material-ui/core/locale";

import palette from "./palette";
import typography from "./typography";
import vars from "./vars";
const theme = createMuiTheme(
  {
    palette,
    typography,
    vars,
  },
  esES
);

export default theme;

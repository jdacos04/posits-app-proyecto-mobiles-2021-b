import React from "react";

// styled components
import {
  HeaderView,
  HeaderTitle,
  HeaderButton,
  colors,
} from "./../components/styles";

// Icons
import { Entypo } from "@expo/vector-icons";

const Header = ({ handleClearTodos }) => {
  return (
    <HeaderView>
      <HeaderTitle>Todos</HeaderTitle>
      <HeaderButton onPress={handleClearTodos}>
        <Entypo name="trash" size={25} color={colors.tertiary} />
      </HeaderButton>
    </HeaderView>
  );
};

export default Header;

import React from "react";
import { useTheme } from "../context/ThemeContext";

type ComponentMap<P> = {
  [key: string]: React.ComponentType<P>;
};

export function withThemeComponent<Props extends object>(
  modernComponent: React.ComponentType<Props>,
  retroComponent: React.ComponentType<Props>,
  techComponent: React.ComponentType<Props>
) {
  return (props: Props) => {
    const { theme } = useTheme();

    const componentMap: ComponentMap<Props> = {
      modern: modernComponent,
      retro: retroComponent,
      tech: techComponent,
    };

    const Component = componentMap[theme] || modernComponent;
    return React.createElement(Component, props);
  };
}

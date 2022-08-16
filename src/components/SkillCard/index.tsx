import React from "react";
import {
  Text,
  TouchableOpacity,
  FlatList,
  GestureResponderEvent,
} from "react-native";

import { DataProps } from "../../pages/Home";

import { styles } from "./styles";

export type SkillCardProps = {
  skills: DataProps[];
  handleRemoveSkill: (id: string) => void;
};

const SkillCard = ({ skills, handleRemoveSkill }: SkillCardProps) => {
  return (
    <>
      <Text style={styles.title}>Minhas habilidades</Text>

      <FlatList
        data={skills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.buttonSkill}
            onPress={() => handleRemoveSkill(item.id)}
          >
            <Text style={styles.textSkill}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

export default SkillCard;

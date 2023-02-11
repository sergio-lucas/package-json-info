

import React from "react";
import {Box} from "@strapi/design-system/Box";
import {Typography} from "@strapi/design-system/Typography";
import { Grid, GridItem } from '@strapi/design-system';

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export const List = ({items}) => {
  if (isEmpty(items)) return <></>;
  return Object.entries(items).map((item, index) => {
    return (
      <Box padding={4} background="neutral100" key={index}>
        <Grid gap={4}>
        <GridItem col={3} s={12}>
          <Box hasRadius background="neutral0" shadow="tableShadow" padding={4}>
          <Typography variant="omega">{(item[0]).toUpperCase()}</Typography>
          </Box>
        </GridItem>
        <GridItem col={9} s={12}>
          <Box hasRadius background="neutral0" shadow="tableShadow" padding={4}>
            {typeof item[1] === 'object' ? Object.entries(item[1]).map((subItem, subIndex) => {
              return <Box key={subIndex}>
                <Typography variant="omega">{`${subItem[0]}: ${(subItem[1]).toString()}`}</Typography>
              </Box>
            }) : (item[1]).toString()}
          </Box>
        </GridItem>
      </Grid>
    </Box>
    )
  })
}
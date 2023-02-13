/*
 *
 * HomePage
 *
 */

import React, {memo, useState, useEffect} from "react";
import {ContentLayout, BaseHeaderLayout, Box} from "@strapi/design-system";
import { useFetchClient } from '@strapi/helper-plugin';
import {List} from './List';

const HomePage = () => {
  const { get } = useFetchClient();
  const [items, setItems] = useState({});

  useEffect(() => {
    get("/strapi-package-json-info").then(({data}) => setItems(data))
  }, [])
  return (
    <ContentLayout>
      <Box background="neutral100">
        <BaseHeaderLayout title="Package JSON Info" as="h2" />
      </Box>
      <List items={items} />
    </ContentLayout>
  );
};

export default memo(HomePage);

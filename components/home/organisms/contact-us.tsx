'use client';

import React, { HTMLAttributes, useState } from 'react';
import HireUsButton from '@/components/home/molecules/hire-us-button';
import Sidebar from '@/components/home/molecules/sidebar';

type ContactUsProps = HTMLAttributes<HTMLDivElement> & {};

const ContactUs = ({}: ContactUsProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <HireUsButton
        onClick={() => {
          setOpen((old) => !old);
        }}
        open={open}
        className={'fixed bottom-8 right-8 z-[150]'}
      />
      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
};

export default ContactUs;

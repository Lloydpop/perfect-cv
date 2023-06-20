import React from "react";
import { FolderPlusIcon } from "@heroicons/react/24/outline";
import ButtonElement from "../Button/Button";
import Container from "../Container/Container";
import Image from "../Image/Image";
import Empty from "../../Assets/empty.png";
interface props {
  show?: boolean;
  btn_title?: string;
  title?: string;
  description?: string;
  action?: () => void;
}
const EmptyState = ({
  show = false,
  btn_title,
  action,
  description,
  title,
}: props) => {
  return (
    <Container>
      <section className="py-4 bg-neutral-50 overflow-hidden">
        <div className="container px-4 mx-auto">
          <img className="mx-auto" src="dashy-assets/images/empty.png" alt="" />
          <div className="max-w-md mx-auto text-center">
            <h2 className="font-heading mb-3 text-2xl font-semibold">
              {title}
            </h2>
            <p className=" text-neutral-500">{description}</p>
            <Image src={Empty} width={"200px"} m={"auto"} />
            {show === true ? (
              <div>
                <FolderPlusIcon
                  className=" text-blue-600 m-auto"
                  width={"50px"}
                />
              </div>
            ) : (
              <ButtonElement variant="secondary" onClick={action}>
                <FolderPlusIcon className="mr-2" width={"20px"} />
                {btn_title}
              </ButtonElement>
            )}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default EmptyState;

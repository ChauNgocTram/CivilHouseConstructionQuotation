import { useState } from "react";
import { Modal } from "../../../components";
import { createConstructionConfig } from "../../../constants/apiConstructionConfig";
import { Button } from "antd";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-toastify";

const ConstructionConfigForProject = ({ showModal, setShowModal }) => {
  const handleButtonClick = () => {
    setShowModal(true);
  };
  const validationSchema = Yup.object().shape({
    sandMixingRatio: Yup.number()
      .moreThan(0, "sandMixingRatio must be more than 0")
      .required("Required"),
    cementMixingRatio: Yup.number()
      .moreThan(0, "cementMixingRatio must be more than 0")
      .required("Required"),
    stoneMixingRatio: Yup.number()
      .moreThan(0, "stoneMixingRatio must be more than 0")
      .required("Required"),
    constructionType: Yup.number()
      .required("Required"),
    numOfFloorMin: Yup.number()
      .moreThan(0, "numOfFloorMin must be more than 0")
      .required("Required"),
    numOfFloorMax: Yup.number()
      .moreThan(0, "numOfFloorMax must be more than 0")
      .required("Required"),
    areaMin: Yup.number()
      .moreThan(0, "areaMin must be more than 0")
      .required("Required"),
    areaMax: Yup.number()
      .moreThan(Yup.ref("areaMin"), "areaMax must be more than areaMin")
      .required("Required"),
    tiledAreaMin: Yup.number()
      .moreThan(0, "tiledAreaMin must be more than 0")
      .required("Required"),
    tiledAreaMax: Yup.number()
      .moreThan(
        Yup.ref("tiledAreaMin"),
        "tiledAreaMax must be more than tiledAreaMin"
      )
      .required("Required"),
  });

  const initialValues = {
    sandMixingRatio: 0,
    cementMixingRatio: 0,
    stoneMixingRatio: 0,
    constructionType: 0,
    numOfFloorMin: 0,
    numOfFloorMax: 0,
    areaMin: 0,
    areaMax: 0,
    tiledAreaMin: 0,
    tiledAreaMax: 0,
  };

  return (
    <>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              console.log(values);
              const result = await createConstructionConfig(values);
              console.log(result)
              if (result.isSuccess) {
             toast.success("Create successfully")
             setShowModal(false)
              } else {
                for (var i = 0; i < result.messages.length; i++) {
                  toast.error(result.messages[i]);
                }
              }
            } catch (error) {
              console.error("Error updating project config:", error);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="flex flex-col my-3 mx-2">
                <h2 className="text-lg font-semibold mb-4 text-center">
                  Create Construction Config
                </h2>

                <label htmlFor="sandMixingRatio" className="text-base">
                  Sand Mixing Ratio:
                </label>
                <Field
                  name="sandMixingRatio"
                  type="number"
                  className="border border-gray-300 p-2 rounded-md"
                />
                <ErrorMessage
                  name="sandMixingRatio"
                  component="div"
                  className="text-red-600"
                />

                <label htmlFor="cementMixingRatio" className="text-base">
                  Cement Mixing Ratio:
                </label>
                <Field
                  name="cementMixingRatio"
                  type="number"
                  className="border border-gray-300 p-2 rounded-md"
                />
                <ErrorMessage
                  name="cementMixingRatio"
                  component="div"
                  className="text-red-600"
                />

                <label htmlFor="stoneMixingRatio" className="text-base">
                  Stone Mixing Ratio:
                </label>
                <Field
                  name="stoneMixingRatio"
                  type="number"
                  className="border border-gray-300 p-2 rounded-md"
                />
                <ErrorMessage
                  name="stoneMixingRatio"
                  component="div"
                  className="text-red-600"
                />

                <label htmlFor="constructionType" className="text-base">
                  Construction Type:
                </label>
                <Field
                  as="select"
                  name="constructionType"
                  className="border border-gray-300 p-2 rounded-md"
                >
                  <option value="0">Rough Construction</option>
                  <option value="1">Complete Construction</option>
                </Field>
                <ErrorMessage
                  name="constructionType"
                  component="div"
                  className="text-red-600"
                />

                <label htmlFor="numOfFloorMin" className="text-base">
                  Minimum Number of Floors:
                </label>
                <Field
                  name="numOfFloorMin"
                  type="number"
                  className="border border-gray-300 p-2 rounded-md"
                />
                <ErrorMessage
                  name="numOfFloorMin"
                  component="div"
                  className="text-red-600"
                />

                <label htmlFor="numOfFloorMax" className="text-base">
                  Maximum Number of Floors:
                </label>
                <Field
                  name="numOfFloorMax"
                  type="number"
                  className="border border-gray-300 p-2 rounded-md"
                />
                <ErrorMessage
                  name="numOfFloorMax"
                  component="div"
                  className="text-red-600"
                />

                <label htmlFor="areaMin" className="text-base">
                  Minimum Area:
                </label>
                <Field
                  name="areaMin"
                  type="number"
                  className="border border-gray-300 p-2 rounded-md"
                />
                <ErrorMessage
                  name="areaMin"
                  component="div"
                  className="text-red-600"
                />

                <label htmlFor="areaMax" className="text-base">
                  Maximum Area:
                </label>
                <Field
                  name="areaMax"
                  type="number"
                  className="border border-gray-300 p-2 rounded-md"
                />
                <ErrorMessage
                  name="areaMax"
                  component="div"
                  className="text-red-600"
                />

                <label htmlFor="tiledAreaMin" className="text-base">
                  Minimum Tiled Area:
                </label>
                <Field
                  name="tiledAreaMin"
                  type="number"
                  className="border border-gray-300 p-2 rounded-md"
                />
                <ErrorMessage
                  name="tiledAreaMin"
                  component="div"
                  className="text-red-600"
                />

                <label htmlFor="tiledAreaMax" className="text-base">
                  Maximum Tiled Area:
                </label>
                <Field
                  name="tiledAreaMax"
                  type="number"
                  className="border border-gray-300 p-2 rounded-md"
                />
                <ErrorMessage
                  name="tiledAreaMax"
                  component="div"
                  className="text-red-600"
                />

                <Button
                  type="primary"
                  htmlType="submit"
                  className="text-white bg-green-500 font-semibold p-2 mt-5"
                >
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};
export default ConstructionConfigForProject;

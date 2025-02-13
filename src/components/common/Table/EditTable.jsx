import React, { useState } from "react";
import {
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Select,
  Table,
  Typography,
  Upload,
} from "antd";
import { Image } from "antd";

const ImageUploader = ({ onImageUpload }) => {
  const [imageUrl, setImageUrl] = useState(null);

  const handleChange = (info) => {
    if (info.file.status === 'done') {
      // 업로드 완료 후 이미지 URL 설정
      setImageUrl(info.file.response.url);
      // message.success(`${info.file.name} file uploaded successfully`);
      onImageUpload(info.file.response.url); // 부모 컴포넌트에 이미지 URL 전달
    } else if (info.file.status === 'error') {
      // message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <Upload
      name="file"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      action="/upload" // 서버 업로드 URL
      onChange={handleChange}
    >
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="avatar"
          style={{ width: '100%' }}
        />
      ) : (
        <div>
          {/* <PlusOutlined /> */}
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
      )}
    </Upload>
  );
};

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  let inputNode;
  if (inputType === "number") {
    inputNode = <InputNumber />;
  } else if (inputType === "select") {
    inputNode = (
      <Select>
        {dataIndex === "유형" && (
          <>
            <Select.Option value="학습용어">학습용어</Select.Option>
            <Select.Option value="학습활동">학습활동</Select.Option>
          </>
        )}
        {dataIndex === "출제방식" && (
          <>
            <Select.Option value="단답형">단답형</Select.Option>
            <Select.Option value="선택형">선택형</Select.Option>
            <Select.Option value="진위형">진위형</Select.Option>
          </>
        )}
      </Select>
    );
  } else {
    inputNode = <Input />;
  }

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const EditTable = ({ data, setData }) => {
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      name: "",
      age: "",
      address: "",
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const handleImageUpload = (key, imageUrl) => {
    const newData = data.map((item) => {
      if (item.key === key) {
        return { ...item, 이미지: imageUrl };
      }
      return item;
    });
    setData(newData);
  };

  const columns = [
    {
      title: "유형",
      dataIndex: "유형",
      width: "5%",
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Select>
            <Select.Option value="학습용어">학습용어</Select.Option>
            <Select.Option value="학습활동">학습활동</Select.Option>
          </Select>
        ) : (
          <>{record.유형}</>
        );
      },
    },
    {
      title: "출제방식",
      dataIndex: "출제방식",
      width: "5%",
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Select>
            <Select.Option value="단답형">단답형</Select.Option>
            <Select.Option value="선택형">선택형</Select.Option>
            <Select.Option value="진위형">진위형</Select.Option>
          </Select>
        ) : (
          <>{record.출제방식}</>
        );
      },
    },
    {
      title: "질문",
      dataIndex: "질문",
      width: "25%",
      editable: true,
    },
    {
      title: "대답",
      dataIndex: "대답",
      width: "15%",
      editable: true,
    },
    {
      title: "해설",
      dataIndex: "해설",
      width: "20%",
      editable: true,
    },
    {
      title: "이미지",
      dataIndex: "이미지",
      width: "4%",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
           <ImageUploader onImageUpload={(url) => handleImageUpload(record.key, url)} />
        ) : (
          <Image
            width={50}
            height={50}
            src={record.이미지 || "error"}
            fallback="data:image/png;base64,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"
          />
        );
      },
    },
    {
      title: "수정",
      dataIndex: "operation",
      width: "4%",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginInlineEnd: 8,
              }}
            >
              저장
            </Typography.Link>
            {/* <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>닫기</a>
            </Popconfirm> */}
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            <svg
              style={{ width: "20px", height: "20px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M24.7434 3.2565C23.9379 2.45193 22.8459 2 21.7073 2C20.5688 2 19.4768 2.45193 18.6713 3.2565L4.32849 17.5996C3.84072 18.0869 3.49796 18.7001 3.33846 19.3708L2.02443 24.8918C1.98885 25.0414 1.99218 25.1976 2.03412 25.3455C2.07605 25.4934 2.15518 25.6281 2.26396 25.7368C2.37275 25.8454 2.50755 25.9244 2.65553 25.9662C2.8035 26.0079 2.95971 26.0111 3.10926 25.9753L8.6306 24.6602C9.30178 24.5009 9.91545 24.1582 10.403 23.6702L22.401 11.6718C22.7921 12.0663 23.0109 12.5998 23.0095 13.1553C23.0082 13.7108 22.7868 14.2431 22.3938 14.6357L20.2541 16.7765C20.1657 16.8588 20.0948 16.9582 20.0456 17.0686C19.9964 17.179 19.9699 17.2982 19.9678 17.419C19.9657 17.5398 19.9879 17.6599 20.0332 17.7719C20.0784 17.884 20.1458 17.9858 20.2313 18.0713C20.3167 18.1567 20.4185 18.2241 20.5306 18.2693C20.6427 18.3146 20.7627 18.3368 20.8836 18.3347C21.0044 18.3326 21.1236 18.3061 21.234 18.2569C21.3444 18.2077 21.4437 18.1368 21.5261 18.0484L23.667 15.9089C24.3973 15.1786 24.8081 14.1884 24.8092 13.1556C24.8103 12.1228 24.4017 11.1318 23.673 10.3999L24.7434 9.3295C25.548 8.52401 26 7.43208 26 6.2936C26 5.15511 25.548 4.06319 24.7434 3.2577M19.9433 4.52966C20.175 4.29801 20.45 4.11426 20.7527 3.9889C21.0553 3.86353 21.3797 3.79901 21.7073 3.79901C22.035 3.79901 22.3594 3.86353 22.662 3.9889C22.9647 4.11426 23.2397 4.29801 23.4714 4.52966C23.7031 4.7613 23.8868 5.0363 24.0122 5.33896C24.1376 5.64162 24.2021 5.966 24.2021 6.2936C24.2021 6.62119 24.1376 6.94558 24.0122 7.24824C23.8868 7.55089 23.7031 7.82589 23.4714 8.05754L9.12982 22.3983C8.87661 22.6503 8.5598 22.8266 8.21299 22.9094L4.11368 23.885L5.08931 19.7871C5.17211 19.4392 5.34972 19.1224 5.60172 18.8704L19.9433 4.52966Z"
                fill="#2E90FF"
              />
            </svg>
          </Typography.Link>
        );
      },
    },
    {
      title: "삭제",
      dataIndex: "operation",
      width: "4%",
      render: (_, record) => {
        const handleDelete = (key) => {
          const newData = data.filter((item) => item.key !== key);
          setData(newData);
        };
        return (
          <Popconfirm
            title="선택한 질문/대답을 '콘텐츠'에서 삭제합니다."
            onConfirm={() => handleDelete(record.key)}
          >
            <svg
              style={{ width: "20px", height: "20px",cursor: "pointer" }}
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M23.3333 5.83325C23.6428 5.83325 23.9395 5.95617 24.1583 6.17496C24.3771 6.39375 24.5 6.6905 24.5 6.99992C24.5 7.30934 24.3771 7.60608 24.1583 7.82488C23.9395 8.04367 23.6428 8.16659 23.3333 8.16659H22.1667L22.1632 8.24942L21.0747 23.4989C21.0328 24.0876 20.7693 24.6385 20.3375 25.0408C19.9056 25.443 19.3373 25.6666 18.7472 25.6666H9.25167C8.6615 25.6666 8.09324 25.443 7.66137 25.0408C7.22949 24.6385 6.96607 24.0876 6.92417 23.4989L5.83567 8.25059L5.83333 8.16659H4.66667C4.35725 8.16659 4.0605 8.04367 3.84171 7.82488C3.62292 7.60608 3.5 7.30934 3.5 6.99992C3.5 6.6905 3.62292 6.39375 3.84171 6.17496C4.0605 5.95617 4.35725 5.83325 4.66667 5.83325H23.3333ZM19.8298 8.16659H8.17017L9.25283 23.3333H18.7472L19.8298 8.16659ZM16.3333 2.33325C16.6428 2.33325 16.9395 2.45617 17.1583 2.67496C17.3771 2.89375 17.5 3.1905 17.5 3.49992C17.5 3.80934 17.3771 4.10608 17.1583 4.32488C16.9395 4.54367 16.6428 4.66659 16.3333 4.66659H11.6667C11.3572 4.66659 11.0605 4.54367 10.8417 4.32488C10.6229 4.10608 10.5 3.80934 10.5 3.49992C10.5 3.1905 10.6229 2.89375 10.8417 2.67496C11.0605 2.45617 11.3572 2.33325 11.6667 2.33325H16.3333Z"
                fill="#FE575C"
              />
            </svg>
          </Popconfirm>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType:
          col.dataIndex === "유형" || col.dataIndex === "출제방식"
            ? "select"
            : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <>
      {/* antd Table 에 Drag & Drop (react-beautiful-dnd) 적용해서 테이블 행(row) 순서 변경 가능하도록 수정! */}
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
    </>
  );
};

export default EditTable;

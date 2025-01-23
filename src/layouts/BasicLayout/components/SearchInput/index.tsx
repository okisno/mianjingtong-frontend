import {Input, theme} from "antd";
import {useRouter} from "next/navigation";
import "./index.css"

interface Props {
}

/**
 * 搜索条
 * @constructor
 */
/**
 * 搜索条
 * @constructor
 */
const SearchInput = () => {
    const router = useRouter();

    return (
        <div className="search-input"
            aria-hidden
            style={{
                display: "flex",
                alignItems: "center",
                marginInlineEnd: 24,
            }}
        >
            <Input.Search
                style={{
                    borderRadius: 4,
                    marginInlineEnd: 12,
                }}
                placeholder="搜索题目"
                onSearch={(value) => {
                    router.push(`/questions?q=${value}`);
                }}
            />
        </div>
    );
};


export default SearchInput;
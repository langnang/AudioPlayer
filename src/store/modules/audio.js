export default {
  namespaced: true,
  state: {
    item: {
      id: null,
      album: "",
      cover: null,
      src: null,
      author: "",
      lyric: "",
    },
    index: 0,
    isPlaying: false,
    list: [],
  },
  mutations: {
    SET_INDEX(state, index) {
      state.index = index;
    },
    SET_ITEM(state, item) {
      state.item = item;
    },
    SET_LIST(state, list) {
      state.list = list;
    },
    // _(state, payload) { }
  },
  getters: {
    // _: (state, getters) => { }
  },
  actions: {
    getAudioList({ commit }) {
      console.log(this._vm);
      const [start, end] = ["```json", "```"];
      window
        .gh_api({})
        .issues({})
        .info({
          owner: "langnang",
          repo: "AudioPlayer",
          issue_number: 7,
        })
        .then((res) => {
          console.log(res);
          commit(
            "SET_LIST",
            JSON.parse(
              res.body.substring(
                res.body.indexOf(start) + start.length,
                res.body.lastIndexOf(end)
              )
            )
          );
        });
    },
    // _(context, payload) { },
    // _({state,commit,getters},payload){}
  },
};

import { StyleSheet, Dimensions } from "react-native";

// Constants for reusable values
const COLORS = {
  white: "#fff",
};

const SPACING = {
  small: 10,
  medium: 20,
  large: 40,
};

const FONT_SIZE = {
  small: 18,
  medium: 24,
  large: 40,
};

const BORDER_RADIUS = {
  large: 36,
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImageContainer: {
    flex: 1,
    height: height,
  },
  logoContainer: {
    padding: SPACING.large,
    alignItems: "center",
    marginTop: 74,
  },
  titleContainer: {
    marginTop: SPACING.large,
  },
  titleText: {
    fontSize: FONT_SIZE.large,
    textAlign: "center",
    fontWeight: "800",
    color: COLORS.white,
  },
  titleSubTextContainer: {
    marginTop: SPACING.medium,
  },
  titleSubText: {
    fontWeight: "300",
    fontSize: FONT_SIZE.small,
    textAlign: "center",
    color: COLORS.white,
  },
  buttonPrimary: {
    backgroundColor: COLORS.white,
    alignItems: "center",
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.large,
    flex: 1,
  },
  buttonPrimaryText: {
    fontSize: FONT_SIZE.small,
    fontWeight: "300",
    textAlign: "center",
  },
  buttonSecondary: {
    alignItems: "center",
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.large,
    borderWidth: 1,
    borderColor: COLORS.white,
    flex: 1,
  },
  buttonSecondaryText: {
    fontSize: FONT_SIZE.small,
    fontWeight: "300",
    textAlign: "center",
    color: COLORS.white,
  },
  buttonGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.medium,
    paddingHorizontal: SPACING.medium,
  },
  buttonGroupSubText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: SPACING.small,
    marginTop: 19,
  },
  searchGroup: {
    paddingHorizontal: SPACING.medium,
    marginTop: SPACING.medium,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: FONT_SIZE.small,
    color: "#000",
  },
  searchControl: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: SPACING.small,
    height: 40,
  },
  searchButton: {
    marginLeft: SPACING.small,
    backgroundColor: "#34967C",
    padding: SPACING.small,
    borderRadius: 10,
  },
  filterGroup: {
    flexDirection: "row",
    paddingHorizontal: SPACING.small,
    columnGap: SPACING.small,
  },
  filterContainer: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: SPACING.medium,
    marginTop: SPACING.medium,
  },
  paginationContainer: {
    alignItems: "center",
    marginVertical: SPACING.medium,
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.large,
  },
  showMoreButtonText: {
    color: COLORS.white,
    textAlign: "center",
    fontSize: FONT_SIZE.medium,
  },
});

export { styles };
